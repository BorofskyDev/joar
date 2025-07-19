import { Icon, icons, PText } from '@/components/ui'
import styles from './SearchButton.module.scss'

export function SearchButton() {
  return (
    <button className={styles.searchButton}>
      <Icon path={icons.search} className={styles.icon} />
      <PText variant='label-sm' className={styles.label}>
        Search
      </PText>
    </button>
  )
}
