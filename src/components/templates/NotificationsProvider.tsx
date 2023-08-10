import type { Notification } from '@usedapp/core';
import { shortenAddress, useEthers, useNotifications } from '@usedapp/core';
import { useEffect } from 'react';

function NotificationsProvider() {
  const { notifications } = useNotifications();
  console.log('asdf notifications', notifications);

  const { account } = useEthers();

  // Always escape HTML for text arguments!
  function escapeHtml(html: any) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(
    message: string,
    variant = 'primary',
    icon = 'info-circle',
    duration = 3000
  ) {
    const alert = Object.assign(document.createElement('sl-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <sl-icon name="${icon}" slot="icon" style="color: var(--sl-color-${variant}-600)"></sl-icon>
        ${escapeHtml(message)}
      `,
    });

    document.body.append(alert);
    return alert.toast();
  }

  function notificationSwitch(notification: Notification) {
    switch (notification.type) {
      case 'walletConnected':
        notify(
          `Connected to ${account && shortenAddress(account)}`,
          'primary',
          'wallet-fill'
        );
        break;
      case 'transactionPendingSignature':
        notify(`Transaction pending signature`, 'primary', 'info-circle');
        break;
      case 'transactionStarted':
        notify(`Transaction started`, 'warning', 'box-arrow-up-right', 100000);
        break;
      case 'transactionSucceed':
        notify(`Transaction succeeded`, 'success', 'check-circle', 3000);
        break;
      case 'transactionFailed':
        notify(`Transaction failed`, 'danger', 'exclamation-circle', 10000);
        break;
      default:
        break;
    }
  }

  // use useEffect to listen for new notifications and call the notify function
  useEffect(() => {
    if (notifications.length > 0) {
      const notification = notifications[notifications.length - 1];
      notificationSwitch(notification);
    }
  }, [notifications]);

  return <></>;
}

export default NotificationsProvider;
