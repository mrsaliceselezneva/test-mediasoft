import styles from './CartClearModal.module.scss';

function CartClearModal(props) {
    if (props.showCartClearModal) {
        return (
            <div className={styles.modal} onClick={props.onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__title}>{props.title}</div>
                    <div className={styles.modal__content__footer}>
                        <button
                            className={styles.modal__content__footer__clear}
                            onClick={props.clear}>
                            Удалить
                        </button>
                        <button
                            className={styles.modal__content__footer__close}
                            onClick={props.onClose}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default CartClearModal;
