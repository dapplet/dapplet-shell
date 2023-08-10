import { setDefaultAnimation } from '@shoelace-style/shoelace/dist/utilities/animation-registry.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library';

// Change the default animation for all dialogs
setDefaultAnimation('dialog.denyClose', {
  keyframes: [],
  options: {},
});

registerIconLibrary('default', {
  resolver: (name) =>
    `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/${name}.svg`,
});

setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/'
);

// setBasePath('/');

//TODO: optimize with CDN

// export * from '@shoelace-style/shoelace/dist/components/alert/alert';
// export * from '@shoelace-style/shoelace/dist/components/animated-image/animated-image';
// export * from '@shoelace-style/shoelace/dist/components/animation/animation';
// export * from '@shoelace-style/shoelace/dist/components/avatar/avatar';
// export * from '@shoelace-style/shoelace/dist/components/badge/badge';
// export * from '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item';
// export * from '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb';
// export * from '@shoelace-style/shoelace/dist/components/button-group/button-group';
// export * from '@shoelace-style/shoelace/dist/components/button/button';
// export * from '@shoelace-style/shoelace/dist/components/card/card';
// export * from '@shoelace-style/shoelace/dist/components/checkbox/checkbox';
// export * from '@shoelace-style/shoelace/dist/components/color-picker/color-picker';
// export * from '@shoelace-style/shoelace/dist/components/details/details';
// export * from '@shoelace-style/shoelace/dist/components/dialog/dialog';
// export * from '@shoelace-style/shoelace/dist/components/divider/divider';
// export * from '@shoelace-style/shoelace/dist/components/drawer/drawer';
// export * from '@shoelace-style/shoelace/dist/components/dropdown/dropdown';
// export * from '@shoelace-style/shoelace/dist/components/format-bytes/format-bytes';
// export * from '@shoelace-style/shoelace/dist/components/format-date/format-date';
// export * from '@shoelace-style/shoelace/dist/components/format-number/format-number';
// export * from '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
// export * from '@shoelace-style/shoelace/dist/components/icon/icon';
// export * from '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer';
// export * from '@shoelace-style/shoelace/dist/components/include/include';
// export * from '@shoelace-style/shoelace/dist/components/input/input';
// export * from '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
// export * from '@shoelace-style/shoelace/dist/components/menu-label/menu-label';
// export * from '@shoelace-style/shoelace/dist/components/menu/menu';
// export * from '@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer';
// export * from '@shoelace-style/shoelace/dist/components/option/option';
// export * from '@shoelace-style/shoelace/dist/components/popup/popup';
// export * from '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar';
// export * from '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring';
// export * from '@shoelace-style/shoelace/dist/components/qr-code/qr-code';
// export * from '@shoelace-style/shoelace/dist/components/radio-button/radio-button';
// export * from '@shoelace-style/shoelace/dist/components/radio-group/radio-group';
// export * from '@shoelace-style/shoelace/dist/components/radio/radio';
// export * from '@shoelace-style/shoelace/dist/components/range/range';
// export * from '@shoelace-style/shoelace/dist/components/rating/rating';
// export * from '@shoelace-style/shoelace/dist/components/relative-time/relative-time';
// export * from '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer';
// export * from '@shoelace-style/shoelace/dist/components/select/select';
// export * from '@shoelace-style/shoelace/dist/components/skeleton/skeleton';
// export * from '@shoelace-style/shoelace/dist/components/spinner/spinner';
// export * from '@shoelace-style/shoelace/dist/components/split-panel/split-panel';
// export * from '@shoelace-style/shoelace/dist/components/switch/switch';
// export * from '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
// export * from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel';
// export * from '@shoelace-style/shoelace/dist/components/tab/tab';
// export * from '@shoelace-style/shoelace/dist/components/tag/tag';
// export * from '@shoelace-style/shoelace/dist/components/textarea/textarea';
// export * from '@shoelace-style/shoelace/dist/components/tooltip/tooltip';
// export * from '@shoelace-style/shoelace/dist/components/tree-item/tree-item';
// export * from '@shoelace-style/shoelace/dist/components/tree/tree';
// export * from '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden';
export * from '@shoelace-style/shoelace/dist/react';
// export {
//   SlAlert,
//   SlAvatar,
//   SlBadge,
//   SlButton,
//   SlButtonGroup,
//   SlCard,
//   SlCheckbox,
//   SlDialog,
//   SlDivider,
//   SlDrawer,
//   SlDropdown,
//   SlFormatBytes,
//   SlFormatDate,
//   SlFormatNumber,
//   SlIcon,
//   SlIconButton,
//   SlImageComparer,
//   SlInclude,
//   SlInput,
//   SlMenu,
//   SlMenuItem,
//   SlMenuLabel,
//   SlMutationObserver,
//   SlOption,
//   SlPopup,
//   SlProgressBar,
//   SlProgressRing,
//   SlQrCode,
//   SlRadio,
//   SlRadioGroup,
//   SlRange,
//   SlRating,
//   SlRelativeTime,
//   SlResizeObserver,
//   SlSelect,
//   SlSkeleton,
//   SlSpinner,
//   SlSplitPanel,
//   SlSwitch,
//   SlTab,
//   SlTabGroup,
//   SlTabPanel,
//   SlTag,
//   SlTextarea,
//   SlTooltip,
//   SlTree,
//   SlTreeItem,
//   SlVisuallyHidden,
// } from '@shoelace-style/shoelace/dist/react';
