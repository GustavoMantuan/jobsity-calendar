import * as S from './styles'

type BadgeTypes = {
  children: React.ReactNode
}

const Badge = ({ children }: BadgeTypes) => {
  return <S.Badge>{children}</S.Badge>
}

export default Badge
