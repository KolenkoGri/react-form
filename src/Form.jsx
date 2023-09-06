
import _ from './Form.module.css';
import {useForm} from 'react-hook-form';

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    return(
        <form className={_.form} onSubmit={handleSubmit()}>
            <div className={_.wrap}>
                <label htmlFor='email' className={_.label}>E-mail</label>
                <input 
                    {...register('email', {
                        required: {
                        value: true,
                        message: 'Поле не должно быть пустым'
                    },
                    pattern: {
                        value: /^.+@.+\..+$/,
                        message: 'Неверный email'
                    }
                    })}
                    type="text" 
                    className={_.input} 
                    id='email' 
                    aria-invalid={!!errors.email}

                />
                {errors.email && <p className={_.error}>{errors.email.message}</p>}
            </div>

            <div className={_.wrap}>
                <label htmlFor='password' className={_.label}>Пароль</label>
                <input 
                    {...register('password', {
                        required: {
                        value: true,
                        message: 'Поле не должно быть пустым'
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
                        message: 'Пароль 6 символов'
                    }
                    })}
                    type="password" 
                    className={_.input} 
                    id='password' 
                    aria-invalid={!!errors.password}
                />
                {errors.password && <p className={_.error}>{errors.password.message}</p>}
            </div>

            <div className={_.wrapCheckbox}>
                <input 
                    {...register('save')}
                    type="checkbox" 
                    className={_.checkbox} 
                    id='save' 
                />
                <label htmlFor='save' className={_.labelCheckbox}  >Сохранить пароль</label>
            </div>

            <button className={_.submit} type='submit'>Войти</button>

            
        </form>
    )
}