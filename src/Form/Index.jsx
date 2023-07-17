// import React, { useState } from 'react'

// const Index = () => {

//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");

//   const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

//   const calculateAge = () => {
//     const currentDate = new Date();
//     const birthDate = new Date(year, month - 1, day);

//     const ageInMilliseconds = currentDate - birthDate;
//     const ageInSeconds = ageInMilliseconds / 1000;
//     const ageInMinutes = ageInSeconds / 60;
//     const ageInHours = ageInMinutes / 60;
//     const ageInDays = ageInHours / 24;

//     const years = Math.floor(ageInDays / 365);
//     const months = Math.floor((ageInDays % 365) / 30);
//     const days = Math.floor((ageInDays % 365) % 30);

//     setAge({ years, months, days });
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Day"
//         name=' day'
//         value={day}
//         onChange={(e) => setDay(e.target.value)} />
//       <input
//         type="number"
//         placeholder="Month"
//         name='month'
//         value={month}
//         onChange={(e) => setMonth(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Year"
//         name='year'
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//       />

//       <button onClick={calculateAge}>Calc</button>

//       <p>Years: {age.years}</p>
//       <p>Months: {age.months}</p>
//       <p>Days: {age.days}</p>
//     </div>
//   );
// }

// export default Index




import React, { useState } from "react";
import './Form.css';

function Index() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");

  const calculateDate = () => {

      const isValidDate = validateDate(day, month, year);

    if (!isValidDate) {
      setResult("yanlish tarix");
    } else {
   
      const currentDate = new Date();

      const inputDate = new Date(`${year}-${month}-${day}`);

      const ageInMilliseconds = currentDate - inputDate;

          const ageInSeconds = ageInMilliseconds / 1000;
          const ageInMinutes = ageInSeconds / 60;
          const ageInHours = ageInMinutes / 60;
          const ageInDays = ageInHours / 24;

          const years = Math.floor(ageInDays / 365);
          const months = Math.floor((ageInDays % 365) / 30);
          const days = Math.floor((ageInDays % 365) % 30);

      

      // setResult(`Years: ${years}, Ay: ${months}, Gün: ${days}`);
      
      // setResult(`Years: ${years}, Ay: ${months}, Gün: ${days}`);
      setResult({years, months, days})
    }
  };

  const validateDate = (day, month, year) => {
    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (isNaN(parsedDay) || isNaN(parsedMonth) || isNaN(parsedYear)) {
      return false;
    }

    const maxDaysInMonth = new Date(parsedYear, parsedMonth, 0).getDate();

    // new Date(parsedYear, parsedMonth, 0).getDate() kullanarak ayın maksimum gün sayısını kontrol eder

    if (parsedDay > maxDaysInMonth) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <input
        type="number"
        value={day}
        placeholder=" day"
        onChange={(e) => setDay(e.target.value)}
      />

      <input
        type="number"
        value={month}
        placeholder="month"
        onChange={(e) => setMonth(e.target.value)}
      />
      <input
        type="number"
        placeholder="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button onClick={calculateDate}>Netice </button>

      <div className="text-content">
        <p> Years: {result.years}</p>
        <p> Months: {result.months}</p>
        <p> Days: {result.days}</p>
      </div>
    </div>
  );
}

export default Index;

