// Импорт хуков из react-hook-form
import { useForm } from "react-hook-form";
// Импорт yup для создания схемы валидации
import * as yup from "yup";
// Импорт адаптера для использования yup с react-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
// useEffect и useState из React
import { useEffect, useState } from "react";
// Стили формы
import "./RegForm.css";

// Создаём схему валидации с помощью Yup
const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"), // Обязательное имя
  email: yup
    .string()
    .email("Некорректный email") // Проверка корректности email
    .required("Email обязателен"), // Обязательное поле
  password: yup
    .string()
    .required("Пароль обязателен") // Обязательное поле
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Пароль: минимум 8 символов, буквы и цифры
      "Пароль должен содержать буквы, цифры и минимум 8 символов"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают") // Должен совпадать с password
    .required("Подтвердите пароль"), // Обязательное поле
  selectedYear: yup.string().required("Выберите год окончания"), // Обязательный выбор года
});

// Генерируем список последних 40 лет для выпадающего списка
const years = Array.from(
  { length: 40 },
  (_, i) => new Date().getFullYear() - i
);

// Основной компонент формы
function RegForm() {
  // Состояние, показывающее сообщение об успешной отправке
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Инициализация useForm с yup-схемой и режимом валидации "all"
  const {
    register, // Метод регистрации полей
    handleSubmit, // Обработчик отправки формы
    reset, // Сброс формы
    trigger, // Ручной запуск валидации полей
    formState: { errors, isSubmitSuccessful }, // Ошибки и статус отправки
  } = useForm({
    resolver: yupResolver(schema), // Подключаем yup как схему валидации
    mode: "all", // Валидация при любом действии: ввод, фокус, отправка
  });

  // Обработчик отправки формы
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2)); // Показываем данные формы в alert
    setShowSuccessMessage(true); // Показываем сообщение об успехе

    // Прячем сообщение через 3 секунды
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  // Сброс формы после успешной отправки
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(); // Очистка формы
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Поле имени */}
        <input
          type="text"
          placeholder="Имя"
          {...register("name")} // Регистрируем поле
          className={errors.name ? "invalid" : "valid"} // Класс в зависимости от ошибки
        />
        {/* Сообщение об ошибке имени */}
        {errors.name && (
          <div className="error-message">{errors.name.message}</div>
        )}

        {/* Поле email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={errors.email ? "invalid" : "valid"}
        />
        {/* Сообщение об ошибке email */}
        {errors.email && (
          <div className="error-message">{errors.email.message}</div>
        )}

        {/* Поле пароля */}
        <input
          type="password"
          placeholder="Пароль"
          {...register("password", {
            onChange: () => trigger("confirmPassword"), // При изменении триггерам повторную проверку confirmPassword
          })}
          className={errors.password ? "invalid" : "valid"}
        />
        {/* Сообщение об ошибке пароля */}
        {errors.password && (
          <div className="error-message">{errors.password.message}</div>
        )}

        {/* Подтверждение пароля */}
        <input
          type="password"
          placeholder="Подтвердите пароль"
          {...register("confirmPassword")}
          className={errors.confirmPassword ? "invalid" : "valid"}
        />
        {/* Сообщение об ошибке подтверждения пароля */}
        {errors.confirmPassword && (
          <div className="error-message">{errors.confirmPassword.message}</div>
        )}

        {/* Выпадающий список годов */}
        <select
          {...register("selectedYear")}
          className={errors.selectedYear ? "invalid" : "valid"}
        >
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {/* Сообщение об ошибке года */}
        {errors.selectedYear && (
          <div className="error-message">{errors.selectedYear.message}</div>
        )}

        {/* Кнопка отправки */}
        <button type="submit">Отправить</button>
        {/* Кнопка очистки формы */}
        <button type="button" onClick={() => reset()}>
          Очистить форму
        </button>

        {/* Сообщение об успехе */}
        {showSuccessMessage && (
          <div className="success-message">Данные успешно отправлены</div>
        )}
      </form>
    </div>
  );
}

// Экспорт компонента
export default RegForm;
