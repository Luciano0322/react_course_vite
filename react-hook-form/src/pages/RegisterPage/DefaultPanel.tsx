import  { FC } from 'react'
import { useForm } from 'react-hook-form';

const DefaultPanel:FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const doSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form 
        className='rounded-lg shadow-xl p-4'
        onSubmit={doSubmit}
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
    </>
  )
}

export default DefaultPanel
