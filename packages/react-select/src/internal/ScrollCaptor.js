// @flow

import React, { Component, type Element } from 'react';

import NodeResolver from './NodeResolver';

export type CaptorProps = {
  children: Element<*>,
  onBottomArrive?: (event: SyntheticEvent<HTMLElement>) => void,
  onBottomLeave?: (event: SyntheticEvent<HTMLElement>) => void,
  onTopArrive?: (event: SyntheticEvent<HTMLElement>) => void,
  onTopLeave?: (event: SyntheticEvent<HTMLElement>) => void,
};

class ScrollCaptor extends Component<CaptorProps> {
  isBottom: boolean = false;
  isTop: boolean = false;
  scrollTarget: HTMLElement;
  touchStart: number;

  componentDidMount() {
    this.startListening(this.scrollTarget);
  }
  componentWillUnmount() {
    this.stopListening(this.scrollTarget);
  }
  startListening(el: HTMLElement) {
    // bail early if no element is available to attach to
    if (!el) return;

    // all the if statements are to appease Flow 😢
    if (typeof el.addEventListener === 'function') {
      el.addEventListener('scroll', this.onScroll, false);
    }
  }
  stopListening(el: HTMLElement) {
    // all the if statements are to appease Flow 😢
    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('scroll', this.onScroll, false);
    }
  }

  cancelScroll = (event: SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  onScroll = () => {
    // todo: mobile
    const { onBottomArrive, onTopArrive } = this.props;
    const { scrollTop, scrollHeight, clientHeight } = this.scrollTarget;
    const isOnBottom = scrollHeight - scrollTop === clientHeight;

    // bottom limit
    if (isOnBottom) {
      if (onBottomArrive && !this.isBottom) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      this.cancelScroll(event);

      // top limit
    } else if (scrollTop === 0) {
      if (onTopArrive && !this.isTop) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      this.cancelScroll(event);
    }
  };

  getScrollTarget = (ref: HTMLElement) => {
    this.scrollTarget = ref;
  };

  render() {
    return (
      <NodeResolver innerRef={this.getScrollTarget}>
        {this.props.children}
      </NodeResolver>
    );
  }
}

type SwitchProps = CaptorProps & {
  isEnabled: boolean,
};

export default function ScrollCaptorSwitch({
  isEnabled = true,
  ...props
}: SwitchProps) {
  return isEnabled ? <ScrollCaptor {...props} /> : props.children;
}
