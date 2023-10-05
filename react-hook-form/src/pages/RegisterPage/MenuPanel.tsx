import { FC } from 'react'
import { useForm } from 'react-hook-form';

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
  isUpgrade: boolean;
  appetizer?: AppetizerEnum;
  main: MainEnum;
  dessert?: Dessert;
}

// 這邊用一個菜單來顯示表單連動的處理
const MenuPanel: FC = () => {
  const { 
    register,
    watch,
    formState: { errors }, 
    handleSubmit
  } = useForm<ExpForm>();
  // 這裡用套餐欄位判斷是否顯示副餐內容選項。
  const watchUpgrade = watch('isUpgrade');
  const doSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <form onSubmit={doSubmit} className='rounded-lg shadow-xl p-4'>
        {/* 可以嘗試加一些驗證 */}
        <div className='my-2 p-2'>
          <label className='block mb-2'>客戶名</label>
          <input 
            id='custName'
            className='bg-gray-100 p-2 rounded-lg'
            placeholder='輸入名稱' 
            {...register("custName", { required: true })} 
          />
          {errors.custName && <span className='text-red-500'>必填欄位</span>}
        </div>
        <div className='my-2 p-2'>
          <label className='mr-2'> 吃不吃辣 </label>
          <input 
            className='bg-gray-100 p-2 rounded-lg' 
            type='checkbox'
            {...register('isSpicy')}
          />
        </div>
        <div className='my-2 p-2'>
          <label className='mr-2'> 升級套餐 </label>
          <input 
            className='bg-gray-100 p-2 rounded-lg' 
            type='checkbox'
            {...register('isUpgrade')}
          />
        </div>
        {/* 透過watch可以查看欄位現值 */}
        {watchUpgrade && (
          <div className='my-2 p-2'>
            <label className='block mb-2'>開胃菜</label>
            <select 
              className='bg-gray-100 p-2 rounded-lg w-28'
              {...register("appetizer")}
            >
              <option value="沙拉">沙拉</option>
              <option value="麵包">麵包</option>
              <option value="濃湯">濃湯</option>
            </select>
          </div>
        )}
        <div className='my-2 p-2'>
          <label className='block mb-2'>主菜</label>
          <select 
            className='bg-gray-100 p-2 rounded-lg w-28'
            {...register("main", { required: true })}
          >
            <option value="鴨胸">鴨胸</option>
            <option value="牛排">牛排</option>
            <option value="魚排">魚排</option>
          </select>
          {errors.main && <span className='text-red-500'>必填欄位</span>}
        </div>
        {watchUpgrade && (
          <div className='my-2 p-2'>
            <label className='block mb-2'>甜點</label>
            <div>
              <label className='mr-2' htmlFor="cake">蛋糕</label>
              <input 
                id="cake" 
                type="radio" 
                value="蛋糕" 
                {...register("dessert")} 
              />
            </div>
            <div>
              <label className='mr-2' htmlFor="icecream">冰淇淋</label>
              <input 
                id="icecream" 
                type="radio" 
                value="冰淇淋" 
                {...register("dessert")} 
              />
            </div>
          </div>
        )}
        <input
          className='px-4 py-2 m-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-800 '
          type="submit" 
        />
      </form>
    </div>
  )
}

export default MenuPanel
