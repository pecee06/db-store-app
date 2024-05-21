import dbService from "../services/db.service"

const Card = ({quizObj}) => {
    function checkAns(selectedOption) {
        if (selectedOption == quizObj.answer-1)
            alert("Correct Answer")
        else alert("Wrong Answer")
    }

  return (
    <div className="flex flex-col py-5 items-center gap-8 text-lg w-[40vw] bg-white rounded">
        <p className="text-xl font-bold text-orange-600">Q. {quizObj.question}?</p>
        <div className="grid grid-rows-2 grid-cols-2 w-full gap-1">
            <button className="bg-gray-100 p-1 hover:bg-gray-200 transition-all" onClick={()=>{
                checkAns(0)
            }}>{quizObj.options[0]}</button>
            <button className="bg-gray-100 p-1 hover:bg-gray-200 transition-all" onClick={()=>{
                checkAns(1)
            }}>{quizObj.options[1]}</button>
            <button className="bg-gray-100 p-1 hover:bg-gray-200 transition-all" onClick={()=>{
                checkAns(2)
            }}>{quizObj.options[2]}</button>
            <button className="bg-gray-100 p-1 hover:bg-gray-200 transition-all" onClick={()=>{
                checkAns(3)
            }}>{quizObj.options[3]}</button>
        </div>
        <button className="bg-red-600 font-bold text-xl text-white py-1 px-3 flex justify-center items-center mx-2 self-start" onClick={()=>{
            dbService.delete({collectionName: "Quiz", id: quizObj.id})
        }} >X</button>
    </div>
  )
}

export default Card