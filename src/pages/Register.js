import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import img from '../img/Profile.svg';

const LogInPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  let history = useHistory();

  const onSubmit = (data) => {
    if (data.password === data.repeatPassword) {
      fetch('/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          console.log('Success:', json);
          history.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
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
      </div >
    </section >
  );
}

export default LogInPage
