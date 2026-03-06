import { PropsWithChildren, useEffect, RefObject } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
}

export default function Modal(props: ModalProps) {
  const { children, open, onClose, className, ref } = props;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className={styles.container} ref={ref}>
      <div className={styles.overlay} onClick={onClose} />

      <div className={styles.body}>
        <div
          className={`${styles.wrapper} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
