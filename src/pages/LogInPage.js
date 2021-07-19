import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import img from '../img/unlock.svg';
import { setToken } from '../actions/userAction';
import { useDispatch } from 'react-redux';
import { addNotification } from '../addNotification';

const LogInPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  let history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const body = JSON.stringify(data);

      const response = await fetch('/users/login', {
        method: 'POST',
        body,
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();

      if (json.message === "success") {
        dispatch(setToken(json.accessToken));
        history.push('/home');
      } else {
        addNotification("Error", json.message, "danger");
      }
    } catch (error) {
      console.error('Error:', error.message);
      addNotification("Error", "Please, try again later", "danger");
    }
  }

  return (
    <section>
      <div className="container">
        <div className="text">Log Into Your Account</div>
        <img src={img} className="img-md" alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group-wide">
            <input className="input w-100" type="text" placeholder="Login" {...register('login', { required: true })} />
            {errors.login && "Login is required"}
            <input className="input w-100" type="password" placeholder="Password" {...register('password', { required: true })} />
            <input type="submit" className="btn btn-light w-100" value="Log In" />
          </div>
        </form>
        <div className="register-link">
          <Link to={{ pathname: "/register" }}><small className='on-hover'>Create An Account</small></Link>
        </div>
      </div >
    </section >
  );
}

export default LogInPage;
