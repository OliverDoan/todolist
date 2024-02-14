import styles from '../styles/modules/todoItem.module.scss'
interface CheckButtonProps {
  checked: boolean
  handleCheck: () => void
}
function CheckButton({ handleCheck, checked }: CheckButtonProps) {
  return (
    <div
      className={styles.svgBox}
      onClick={() => handleCheck()}
      style={{
        background: checked ? 'var(--primaryPurple)' : 'var(--gray-2)'
      }}
    >
      <svg className={styles.svg} viewBox='0 0 53 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='none'
          strokeMiterlimit='10'
          strokeWidth='6'
          d='M1.5 22L16 36.5L51.5 1'
          strokeLinejoin='round'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default CheckButton
