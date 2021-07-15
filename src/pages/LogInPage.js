import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import img from '../img/unlock.svg';
import { setToken } from '../actions/userAction';
import { useDispatch } from 'react-redux';

const LogInPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  let history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // to teź jakoś wywalić do pliku osobnego
    const body = JSON.stringify(data);

    fetch('/users/login', {
      method: 'POST',
      body,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        // console.log('Success:', json);
        dispatch(setToken(json.accessToken));
        history.push('/home');
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
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

export default LogInPage
