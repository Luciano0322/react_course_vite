import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}
// 這裡借用官網的範例解釋一下常用到的基本hook
const DefaultPart:FC = () => {
  // register 用來綁定input tag的連動操作
  // handleSubmit 有預處理了event.preventDefault()的動作
  // formState 可以調整許多暫存的表單資料
  // watch 的部分可以監看表單欄位得變動
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log('watch 的作用',watch("example"))
  return (
    <form 
      className='rounded-lg shadow-xl p-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register function 會去綁定你設定好的input name, onchange, ref, value... */}
      <div className='my-2 p-2'>
        <label htmlFor="example">範例：</label>
        <input 
          className='bg-gray-100 p-2 rounded-lg'
          defaultValue="test" 
          {...register("example")} 
        />
      </div>
      <div className='my-2 p-2'>
      <label htmlFor="exampleRequired">範例(必填)：</label>
        {/* 在 standard HTML 裡面可以讓他吃 validation rules */}
        <input 
          className='bg-gray-100 p-2 rounded-lg'
          {...register("exampleRequired", { required: true })} 
        />
        {/* errors會是一整包的物件去check前面設定的validation rules  */}
        {errors.exampleRequired && <span className='text-red-500'>必填欄位</span>}
      </div>
      <input
        className='px-4 py-2 m-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-800 '
        type="submit" 
      />
    </form>
  )
}

export default DefaultPart
