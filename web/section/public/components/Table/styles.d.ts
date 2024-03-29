/// <reference types="react" />
/// <reference types="react" />
export declare const TableWrapper: import("styled-components").IStyledComponent<"web", {
    ref?: import("react").LegacyRef<HTMLDivElement>;
    key?: import("react").Key;
    defaultChecked?: boolean;
    defaultValue?: string | number | readonly string[];
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    accessKey?: string;
    autoFocus?: boolean;
    className?: string;
    contentEditable?: "inherit" | (boolean | "false" | "true");
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "false" | "true";
    hidden?: boolean;
    id?: string;
    lang?: string;
    nonce?: string;
    placeholder?: string;
    slot?: string;
    spellCheck?: boolean | "false" | "true";
    style?: import("react").CSSProperties;
    tabIndex?: number;
    title?: string;
    translate?: "yes" | "no";
    radioGroup?: string;
    role?: import("react").AriaRole;
    about?: string;
    content?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    rel?: string;
    resource?: string;
    rev?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    inputMode?: "search" | "numeric" | "none" | "url" | "text" | "decimal" | "tel" | "email";
    is?: string;
    children?: (import("react").ReactNode | Record<string, unknown>) | Iterable<import("react").ReactNode | Record<string, unknown>>;
    "aria-activedescendant"?: string;
    "aria-atomic"?: boolean | "false" | "true";
    "aria-autocomplete"?: "inline" | "both" | "none" | "list";
    "aria-braillelabel"?: string;
    "aria-brailleroledescription"?: string;
    "aria-busy"?: boolean | "false" | "true";
    "aria-checked"?: boolean | "false" | "mixed" | "true";
    "aria-colcount"?: number;
    "aria-colindex"?: number;
    "aria-colindextext"?: string;
    "aria-colspan"?: number;
    "aria-controls"?: string;
    "aria-current"?: boolean | "location" | "time" | "false" | "page" | "true" | "step" | "date";
    "aria-describedby"?: string;
    "aria-description"?: string;
    "aria-details"?: string;
    "aria-disabled"?: boolean | "false" | "true";
    "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup";
    "aria-errormessage"?: string;
    "aria-expanded"?: boolean | "false" | "true";
    "aria-flowto"?: string;
    "aria-grabbed"?: boolean | "false" | "true";
    "aria-haspopup"?: boolean | "grid" | "dialog" | "menu" | "false" | "listbox" | "true" | "tree";
    "aria-hidden"?: boolean | "false" | "true";
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
    "aria-keyshortcuts"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-level"?: number;
    "aria-live"?: "off" | "assertive" | "polite";
    "aria-modal"?: boolean | "false" | "true";
    "aria-multiline"?: boolean | "false" | "true";
    "aria-multiselectable"?: boolean | "false" | "true";
    "aria-orientation"?: "horizontal" | "vertical";
    "aria-owns"?: string;
    "aria-placeholder"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | "false" | "mixed" | "true";
    "aria-readonly"?: boolean | "false" | "true";
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
    "aria-required"?: boolean | "false" | "true";
    "aria-roledescription"?: string;
    "aria-rowcount"?: number;
    "aria-rowindex"?: number;
    "aria-rowindextext"?: string;
    "aria-rowspan"?: number;
    "aria-selected"?: boolean | "false" | "true";
    "aria-setsize"?: number;
    "aria-sort"?: "none" | "other" | "ascending" | "descending";
    "aria-valuemax"?: number;
    "aria-valuemin"?: number;
    "aria-valuenow"?: number;
    "aria-valuetext"?: string;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
    onCopy?: import("react").ClipboardEventHandler<HTMLDivElement>;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLDivElement>;
    onCut?: import("react").ClipboardEventHandler<HTMLDivElement>;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLDivElement>;
    onPaste?: import("react").ClipboardEventHandler<HTMLDivElement>;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLDivElement>;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLDivElement>;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLDivElement>;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLDivElement>;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLDivElement>;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLDivElement>;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLDivElement>;
    onFocus?: import("react").FocusEventHandler<HTMLDivElement>;
    onFocusCapture?: import("react").FocusEventHandler<HTMLDivElement>;
    onBlur?: import("react").FocusEventHandler<HTMLDivElement>;
    onBlurCapture?: import("react").FocusEventHandler<HTMLDivElement>;
    onChange?: import("react").FormEventHandler<HTMLDivElement>;
    onChangeCapture?: import("react").FormEventHandler<HTMLDivElement>;
    onBeforeInput?: import("react").FormEventHandler<HTMLDivElement>;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLDivElement>;
    onInput?: import("react").FormEventHandler<HTMLDivElement>;
    onInputCapture?: import("react").FormEventHandler<HTMLDivElement>;
    onReset?: import("react").FormEventHandler<HTMLDivElement>;
    onResetCapture?: import("react").FormEventHandler<HTMLDivElement>;
    onSubmit?: import("react").FormEventHandler<HTMLDivElement>;
    onSubmitCapture?: import("react").FormEventHandler<HTMLDivElement>;
    onInvalid?: import("react").FormEventHandler<HTMLDivElement>;
    onInvalidCapture?: import("react").FormEventHandler<HTMLDivElement>;
    onLoad?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onError?: import("react").ReactEventHandler<HTMLDivElement>;
    onErrorCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLDivElement>;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLDivElement>;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLDivElement>;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLDivElement>;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLDivElement>;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLDivElement>;
    onAbort?: import("react").ReactEventHandler<HTMLDivElement>;
    onAbortCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onCanPlay?: import("react").ReactEventHandler<HTMLDivElement>;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLDivElement>;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onDurationChange?: import("react").ReactEventHandler<HTMLDivElement>;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onEmptied?: import("react").ReactEventHandler<HTMLDivElement>;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onEncrypted?: import("react").ReactEventHandler<HTMLDivElement>;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onEnded?: import("react").ReactEventHandler<HTMLDivElement>;
    onEndedCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadedData?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadStart?: import("react").ReactEventHandler<HTMLDivElement>;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onPause?: import("react").ReactEventHandler<HTMLDivElement>;
    onPauseCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onPlay?: import("react").ReactEventHandler<HTMLDivElement>;
    onPlayCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onPlaying?: import("react").ReactEventHandler<HTMLDivElement>;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onProgress?: import("react").ReactEventHandler<HTMLDivElement>;
    onProgressCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onRateChange?: import("react").ReactEventHandler<HTMLDivElement>;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onResize?: import("react").ReactEventHandler<HTMLDivElement>;
    onResizeCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onSeeked?: import("react").ReactEventHandler<HTMLDivElement>;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onSeeking?: import("react").ReactEventHandler<HTMLDivElement>;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onStalled?: import("react").ReactEventHandler<HTMLDivElement>;
    onStalledCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onSuspend?: import("react").ReactEventHandler<HTMLDivElement>;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLDivElement>;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onVolumeChange?: import("react").ReactEventHandler<HTMLDivElement>;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onWaiting?: import("react").ReactEventHandler<HTMLDivElement>;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onAuxClick?: import("react").MouseEventHandler<HTMLDivElement>;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onClick?: import("react").MouseEventHandler<HTMLDivElement>;
    onClickCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onContextMenu?: import("react").MouseEventHandler<HTMLDivElement>;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onDoubleClick?: import("react").MouseEventHandler<HTMLDivElement>;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onDrag?: import("react").DragEventHandler<HTMLDivElement>;
    onDragCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDragEnd?: import("react").DragEventHandler<HTMLDivElement>;
    onDragEndCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDragEnter?: import("react").DragEventHandler<HTMLDivElement>;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDragExit?: import("react").DragEventHandler<HTMLDivElement>;
    onDragExitCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDragLeave?: import("react").DragEventHandler<HTMLDivElement>;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDragOver?: import("react").DragEventHandler<HTMLDivElement>;
    onDragOverCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDragStart?: import("react").DragEventHandler<HTMLDivElement>;
    onDragStartCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onDrop?: import("react").DragEventHandler<HTMLDivElement>;
    onDropCapture?: import("react").DragEventHandler<HTMLDivElement>;
    onMouseDown?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseMove?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseOut?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseOver?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseUp?: import("react").MouseEventHandler<HTMLDivElement>;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLDivElement>;
    onSelect?: import("react").ReactEventHandler<HTMLDivElement>;
    onSelectCapture?: import("react").ReactEventHandler<HTMLDivElement>;
    onTouchCancel?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchEnd?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchMove?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchStart?: import("react").TouchEventHandler<HTMLDivElement>;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLDivElement>;
    onPointerDown?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerMove?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerUp?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerCancel?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerEnter?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerLeave?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerOver?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerOut?: import("react").PointerEventHandler<HTMLDivElement>;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLDivElement>;
    onScroll?: import("react").UIEventHandler<HTMLDivElement>;
    onScrollCapture?: import("react").UIEventHandler<HTMLDivElement>;
    onWheel?: import("react").WheelEventHandler<HTMLDivElement>;
    onWheelCapture?: import("react").WheelEventHandler<HTMLDivElement>;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLDivElement>;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLDivElement>;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLDivElement>;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLDivElement>;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLDivElement>;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLDivElement>;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLDivElement>;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLDivElement>;
}>;
