import {useForm} from "react-hook-form"
import dbService from "../services/db.service"

const Quiz = () => {
  const {register, handleSubmit, setValue, formState} = useForm({
    defaultValues: {
      question: "",
      options: ["","","",""],
      answer: 1
    }
  })
  const {errors} = formState

  return (
    <div className="flex h-screen justify-center items-center">
      <form noValidate className="flex flex-col gap-3 border border-black py-6 px-4 rounded">
        <div className="flex flex-col">
          <input type="text" className="input-field" placeholder="Question" {...register("question", {
            required: "This is a required field"
          })} />
          <p className="text-red-600 text-sm">{errors?.question?.message}</p>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col">
            <input type="text" className="input-field" placeholder="Option 1" {...register("options.0", {
              required: "This is a required field"
            })} />
            <p className="text-red-600 text-sm">{errors?.options?.message}</p>
          </div>

          <div className="flex flex-col">
            <input type="text" className="input-field" placeholder="Option 2" {...register("options.1", {
              required: "This is a required field"
            })} />
            <p className="text-red-600 text-sm">{errors?.options?.message}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col">
            <input type="text" className="input-field" placeholder="Option 3" {...register("options.2", {
              required: "This is a required field"
            })} />
            <p className="text-red-600 text-sm">{errors?.options?.message}</p>
          </div>

          <div className="flex flex-col">
            <input type="text" className="input-field" placeholder="Option 4" {...register("options.3", {
              required: "This is a required field"
            })} />
            <p className="text-red-600 text-sm">{errors?.options?.message}</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-5">
          <label htmlFor="option">Correct Answer</label>
          <select id="option" {...register("answer")} className="cursor-pointer bg-gray-200 rounded p-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button type="submit" className="bg-pink-700 text-white uppercase text-lg py-1 rounded" onClick={handleSubmit(formData => {
          dbService.insert({
            collectionName: "Quiz",
            data: formData
          })
          setValue("question","")
          setValue("options",["","","",""])
          setValue("answer",1)
        })}>Push</button>
      </form>
    </div>
  )
}

export default Quiz