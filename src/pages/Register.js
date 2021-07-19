import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import img from '../img/Profile.svg';
import { addNotification } from '../addNotification';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    try {
      if (data.password === data.repeatPassword) {
        const response = await fetch('/users', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
          },
        });
        const json = await response.json();

        if (json.message === "User already exists") {
          addNotification("Error", json.message, "danger");
        } else {
          addNotification("Thank You", json.message, "success");
          history.push('/');
        }
      }
    } catch (error) {
      console.log(error);
      addNotification("Error", "Unable to save to database", "danger");
    }
  }

  return (
    <section>
      <div className="container">
        <div className="text">Create New Account</div>
        <img src={img} className="img-md" alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group-wide">
            <input className="input w-100" type="text" placeholder="Login"  {...register('login', { required: true })} />
            <input className="input w-100" type="email" placeholder="Email"  {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} />
            {errors.email && "Enter correct email adress"}
            <input className="input w-100" type="password" placeholder="Password" {...register('password', { required: true })} />
            <input className="input w-100" type="password" placeholder="Repeat Password" {...register('repeatPassword', { required: true })} />
            <input type="submit" className="btn btn-light w-100" value="Register" />
          </div>
        </form>
        <div className="register-link">
          <Link to={{ pathname: "/" }}><small className='on-hover'>Log In</small></Link>
        </div>
      </div >
    </section >
  );
}

export default Register;
