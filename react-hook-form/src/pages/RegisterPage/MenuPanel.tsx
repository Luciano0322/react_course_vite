import { FC } from 'react'

enum AppetizerEnum {
  salad = "沙拉",
  bread = "麵包",
  soup = "濃湯",
}

enum MainEnum {
  duck = "鴨胸",
  steak = "牛排",
  fish = "魚排",
}

enum Dessert {
  cake = "蛋糕",
  icecream = "冰淇淋"
}


interface ExpForm {
  custName: string;
  isSpicy: boolean;
  appetizer: AppetizerEnum;
  main: MainEnum;
  dessert: Dessert;
}

const MenuPanel: FC = () => {
  
  return (
    <div>
      MenuPanel
    </div>
  )
}

export default MenuPanel
