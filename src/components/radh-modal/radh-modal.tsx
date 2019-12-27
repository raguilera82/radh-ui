import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";

@Component({
  tag: "radh-modal",
  styleUrl: "radh-modal.css",
  shadow: true
})
export class XModal {
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean = false;

  @Prop()
  public heading: string;

  @Event()
  private ok: EventEmitter;
  @Event()
  private cancel: EventEmitter;

  private handleCancelClick = () => {
    this.visible = false;
    this.cancel.emit();
  };

  private handleOkClick = () => {
    this.visible = false;
    this.ok.emit();
  };

  public render() {
    const { visible, heading: title, handleCancelClick, handleOkClick } = this;
    return (
      <div
        class={visible ? "radh-modal-wrapper visible" : "radh-modal-wrapper"}
      >
        <div class="radh-modal">
          <div class="radh-modal-header">
            <span>{title}</span>
          </div>
          <div class="radh-modal-content">
            <slot />
          </div>
          <div class="radh-modal-buttons">
            <button class="radh-modal-cancel" onClick={handleCancelClick}>
              Cancel
            </button>
            <button class="radh-modal-ok" onClick={handleOkClick}>
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
}
