import { useForm, ValidationError } from '@formspree/react';
import { forwardRef, useRef, useEffect, useState } from "react";


function Contact(props, ref) {
  const [state, handleSubmitForm] = useForm('mleyejlr');
  const [errorState, setErrorState] = useState(false);
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [msgInput, setMsgInput] = useState("");




  useEffect(() => {
    setErrorState(false)
    if (state.succeeded) {
      setNameInput("")
      setEmailInput("")
      setMsgInput("")
      setButtonIsClicked(false)
    }
  }, [state.succeeded]);
  function buttonClicked() {
    setButtonIsClicked(true)
  }
  useEffect(() => {
    if (!state.succeeded && !state.submitting && buttonIsClicked) {
      setErrorState(true)
    }
  }, [state.submitting]);
  return (
    <div ref={ref} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="card flex-shrink-0 max-w-lg w-full shadow-2xl bg-base-100">
          <div className="card-body ">
            <form onSubmit={handleSubmitForm}>
              <div className="form-control">
                <div className='flex flex-col sm:flex-row gap-2'>
                  <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} required name='name' id='name' type="text" placeholder="name" className="input flex-1 w-full p-4 sm:w-6  input-bordered rounded-none" />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required name='email' id='email' type="email" placeholder="email" className="input w-full p-4 sm:w-6  flex-1 input-bordered rounded-none" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <textarea value={msgInput} onChange={(e) => setMsgInput(e.target.value)} required name='message' id='message' type="text" placeholder="message" className="mt-2 h-28 input input-bordered rounded-none" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" onClick={buttonClicked} disabled={state.submitting} className="btn btn-primary">Send message</button>
              </div>
              <div className='form-control'>
                {state.succeeded ? (<p className='text-center mt-2'><span className='text-green-500'>Msg Sent - Thank you for reaching out</span>, I will reply as soon as possible</p>) : ""}
                {errorState ? (<p className='text-center mt-2'><span className='text-red-500'>Something Went Wrong</span>, Try using the E-mail Or the phone number</p>) : ""}
              </div>
            </form>
          </div>
        </div>
        <div className="text-center lg:text-left mx-4">
          <h1 className="text-5xl font-bold">Let's <span className='underline underline-offset-3'>connect</span>!</h1>
          <p className='mt-6 text-lg font-bold'>About Me :</p>
          <p className=" max-w-2xl pb-4">I am an enthusiastic learner and a skilled FullStack web developer with significant expertise in IoT programming and game development. Throughout my journey, I have accumulated valuable experience in those field.</p>
          <p><span>E-mail :</span> <a href='mailto:mouaadelbarrik@gmail.com' className='underline text-blue-400'>mouaadelbarrik@gmail.com</a></p>
          <p><span>Phone :</span> <span>+212 682-378735</span></p>
        </div>
      </div>
    </div>)
}
export default forwardRef(Contact)