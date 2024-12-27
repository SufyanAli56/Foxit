import React, { useState } from "react";
import Ques from "../../assets/Ques.png";

const Form = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Сколько займёт разработка дизайна/создание сайта ?",
      answer:
        "К сожалению предварительно на этот вопрос ответить невозможно. Сроки создания каждого дизайна и сайта индивидуальны, зависят от типа выбранного сайта, количества доп. скриптов и анимаций, а также от скорости вашего сотрудничества с нашей командой.",
    },
    {
      question: "Можно ли узнать предварительную стоимость дизайна/сайта ?",
      answer:
        "Да, вы можете получить приблизительную стоимость, связавшись с нами и предоставив подробности о вашем проекте.",
    },
    {
      question: "Создаёте ли вы сайты на CMS системах ?",
      answer:
        "Да, мы создаём сайты на различных CMS системах, включая WordPress, Joomla, и другие.",
    },
    {
      question: "Вы оптимизируете сайты по SEO ?",
      answer:
        "Да, мы предоставляем услуги по SEO-оптимизации, чтобы ваш сайт занимал высокие позиции в поисковых системах.",
    },
    {
      question: "Что вы предоставляете после вёрстки сайта ?",
      answer:
        "После вёрстки сайта мы предоставляем исходные файлы, инструкции по использованию и при необходимости обучение по работе с сайтом.",
    },
  ];

  return (
    <div className="bg-black w-full h-auto py-12">
      <div className="flex justify-center items-center">
        <h2 className="font-semibold text-3xl text-pink-200">
          Часто задаваемые вопросы
        </h2>
        <img src={Ques} alt="Question" className="w-22 h-16 ml-4" />
      </div>
      <div className="px-8">
        <div className="border-b-2 border-pink-200 w-full mt-4"></div>
        <div className="flex flex-row justify-around gap-20 py-12">
          <h2 className="text-pink-200">
            Сколько займёт разработка дизайна/создание сайта ?
          </h2>
         
          <p className="text-pink-200 font-sm  text-sm">
            К сожалению предварительно на этот вопрос ответить невозможно. Сроки
            создания каждого дизайна и сайта индивидуальны, зависят от типа
            выбранного сайта, количества доп. скриптов и анимаций, а также от
            скорости вашего сотрудничества с нашей командой.
          </p>
        </div>
      </div>
      <div className="px-8 mt-6">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer bg-pink-200 p-4 rounded-md"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-black font-medium">{item.question}</h2>
              <span className="text-black text-xl">
                {openFaq === index ? "-" : "+"}
              </span>
            </div>
            {openFaq === index && (
              <div className="bg-pink-100 p-4 mt-2 rounded-md">
                <p className="text-black text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
