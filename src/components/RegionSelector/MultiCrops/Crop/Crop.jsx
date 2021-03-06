import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { equals, is, update, remove } from 'ramda'
import interact from 'interactjs'
import {NumberIcon, DeleteIcon, CropContent} from './CropIcons'
import styles from './Crop.module.scss'

class Crop extends Component {

  cropStyle = (coordinate) => {
    // const { styles } = this.props
    const {
      x, y, width, height,
    } = coordinate;

    return {
      display: 'inline-block',
      position: 'absolute',
      transform: 'translate3d(0, 0, 0)',
      boxSizing: 'border-box',
      cursor: 'move',
      width: width,
      height: height,
      top: y,
      left: x,
      border: '1px solid',
      borderImageSource: 'url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==")',
      borderImageSlice: '1',
      borderImageRepeat: 'repeat',
      msTouchAction: 'none',
      touchAction: 'none',
      userSelect: 'none',
      background: "#262626",
      opacity: 0.5,
      // ...styles,
    }
  }

  prevCoordinate = {};
  prevCoordinates = [];

  isLeftBtnActive = false;
  isRightBtnActive = false;

  componentDidMount() {
    interact(this.crop)
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          })
        ],
      })
      .resizable({
        edges: {
          left: true, right: true, bottom: true, top: true,
        },
        modifiers: [
          interact.modifiers.restrict({
            restriction: 'parent',
          }),
          interact.modifiers.restrictSize({
            min: { width: 1, height: 1 },
            max: { width: this.props.parentImg?.width, height: this.props.parentImg?.height }
          })
        ],
      })
      .on(['dragstart', 'resizestart'], this.changeStartPosition)
      .on(['dragmove', 'dragend', 'resizemove', 'resizeend'], this.handleChange)
      .actionChecker(this.actionTrigger)
  };

  shouldComponentUpdate(nextProps) {
    return !equals(nextProps.coordinate, this.props.coordinate)
      || (nextProps.index !== this.props.index);
  };

  actionTrigger = (pointer, event, action, interactable, element, interaction) => {
    
    if (event.type === 'pointermove') {

    }

    if (event.type === 'pointerdown') {
      
    }

    return action;
  }

  handleChange = (e) => {
    const {
      index,
      coordinate,
      coordinate: { x, y },
      coordinates,
      onResize,
      onDrag,
      onChange,
    } = this.props;
    
    const { dx, dy } = e;

    let nextCoordinate = {};

    if (e.type === 'resizemove') {
      const { width, height } = e.rect;
      const { left, top } = e.deltaRect;
      nextCoordinate = {...coordinate, x: x + left, y: y + top, width, height};
    }

    if (e.type === 'dragmove') {
      nextCoordinate = { ...coordinate, x: x + dx, y: y + dy };
    }
    const nextCoordinates = update(index, nextCoordinate)(coordinates);

      if (is(Function, onResize) && e.type === 'resizemove') {
        onResize(nextCoordinate, index, nextCoordinates)
      }
      if (is(Function, onChange) && ['dragmove', 'resizemove'].includes(e.type)) {
        onChange(nextCoordinate, index, nextCoordinates)
      }
      if (is(Function, onDrag)  && e.type === 'dragmove') {
        onDrag(nextCoordinate, index, nextCoordinates)
      }
      if (['dragend', 'resizeend'].includes(e.type)) {
        this.props.isChange(e);
        document.removeEventListener('contextmenu', this.onContextMenu, false);
      }
  }


   changeStartPosition = (e) => {

    const {
      index,
      coordinate,
      coordinates,
    } = this.props
    
    if (['dragstart', 'resizestart'].includes(e.type)) {
      document.addEventListener('contextmenu', this.onContextMenu, false);
      this.prevCoordinate = { ...coordinate};
      this.prevCoordinates = [...coordinates];
      this.prevCoordinates = update(index, this.prevCoordinate, coordinates);
      this.props.isChange(e);
    }
    
  }

  handleRestore = (e) => {
    const {
      index,
      onRestore,
    } = this.props;

    if (is(Function, onRestore)) {
      onRestore(this.prevCoordinate, index, this.prevCoordinates);
    }
  }

  handleDelete = (e) => {
    const {
      index,
      coordinate,
      onDelete,
      coordinates,
    } = this.props;
    const nextCoordinates = remove(index, 1)(coordinates)
    if (is(Function, onDelete)) {
      onDelete(coordinate, index, nextCoordinates)
    }
  }

  onContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    if (e.button === 2) {

      if (this.isLeftBtnActive === false) {
        this.handleDelete();  
      }
      if (this.isLeftBtnActive === true) {
        this.handleRestore();
        this.isLeftBtnActive = false;
      }
      
    }
    return false;
  }

  onMouseDown = (e) => {
    if (e.button === 0) {
      
      // document.addEventListener('mouseup', this.outsideEvents, false)
      // document.addEventListener('keydown', this.outsideEvents, false)
      this.isLeftBtnActive = true;
    }
    if (e.button === 2) {
      this.isRightBtnActive = true;
    }
  }

  onMouseUp = (e) => {
    if (e.button === 0) {
      document.removeEventListener('mouseup', this.outsideEvents, false);
      document.removeEventListener('keydown', this.outsideEvents, false);
      document.removeEventListener('contextmenu', this.onContextMenu, false);
      this.isLeftBtnActive = false;
    }
    if (e.button === 2) {
      this.isRightBtnActive = false;
    }
  }

  onKeyDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.code === "Escape") {
      this.handleRestore();
        this.isLeftBtnActive = false;
    } 
  }

  onKeyUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  componentWillUnmount() {
    interact(this.crop).unset();
  }

  
  render() {
    const { coordinate, index, numberIcon, cropContent, deleteIcon } = this.props;
    return (
        <div
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onContextMenu={this.onContextMenu}
            style={this.cropStyle(coordinate)}
            ref={(crop) => (this.crop = crop)}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            tabIndex="0"
        >
          {/*<div>*/}
            {numberIcon && <NumberIcon number={index + 1} />}
            {deleteIcon && <DeleteIcon onClick={this.handleDelete} />}
            {cropContent && <CropContent content={coordinate?.content} />}
          {/*</div>*/}
            {[
                styles.ordN,
                styles.ordNe,
                styles.ordNw,
                styles.ordS,
                styles.ordSe,
                styles.ordSw,
                styles.ordE,
                styles.ordW,
            ].map((style, id) => (
                <div className={style} key={id} />
            ))}
        </div>
    );
  }
}


export const coordinateType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
})

const { number, string, bool, func, array, object } = PropTypes

Crop.propTypes = {
  coordinate: coordinateType.isRequired,
  cropContent: bool,
  deleteIcon: bool,
  numberIcon: bool,
  index: PropTypes.oneOfType([number, string]).isRequired,
  onResize: func,
  onDrag: func,
  onDelete: func,
  onChange: func,
  onComplete: func,
  onRestore: func,
  coordinates: array,
  isChange: func,
  styles: object,
}

Crop.defaultProps = {
  styles: {},
  cropContent: false,
  deleteIcon: true,
  numberIcon: true,
}

export default Crop
