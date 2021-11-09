import './styles.scss'

type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <button className="main-button">
      { text }
    </button>
  )
}

export default Button