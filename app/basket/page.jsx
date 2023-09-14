import styles from './Basket.module.scss'

const Basket = () => {

  return (
    <>
    <div className={styles.basket}>
      <div className={styles.text}>
        <h2> Ваша корзина пока пуста</h2>
        <span>Акции, специальные предложения и обзоры самых интересных товаров на главной странице помогут вам определиться с выбором!</span>
        <input type="text" placeholder="Быстрое добавление: введите наименование или код товара" />
      </div>
    </div>
    </>
  )
}
export default Basket