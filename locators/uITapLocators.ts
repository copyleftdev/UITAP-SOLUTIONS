export const UITAP_LOCS = {
    dynamicIdPath: '/dynamicid',
    classAttribPath: '/classattr',
    hiddenLayerPath: '/hiddenlayers',
    loadDelayPath: '/loaddelay',
    ajaxDataPath: '/ajax',
    clientDelayPath: '/clientdelay',
    clickPath: '/click',
    textInputPath: '/textinput',
    scrollPath: '/scroll',
    dynamicTablePath: '/dynamictable',
    verifyTextPath: '/verifytext',
    processBarPath: '/processbar',
    visibilityPath: '/visibility',
    sampleAppPath: '/sampleapp',
    mouseOverPath: '/mouseover',
    nonBreakingSpacePath: '/nbsp',
    overlappedElementPath: '/overlapped',
    shadowDomPath: '/shadowdom',
};
export interface PageLocators {
  buttonAfterDelay: [string, { name: string }];
}

export const loadDelayPage: PageLocators = {
  buttonAfterDelay: ['button', { name: 'Button Appearing After Delay' }],
};