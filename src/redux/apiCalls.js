import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
   dispatch(loginStart())
   try {
      const res = await fetch('https://e-commerce-api.cyclic.app/api/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
      })
      const data = await res.json()
      console.log(data)
      dispatch(loginSuccess(data))
   } catch (err) {
      dispatch(loginFailure())
   }
}