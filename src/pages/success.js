import { CheckCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import Header from '../components/Header';

const success = () => {
  return (
    <div className="bg-green-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white mt-4">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed.
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We will send a confirmation once
            your item has shipped. If you would like to check the status of your
            order(s) please press the link below.
          </p>
          <button className="button">Return to Home</button>
        </div>
      </main>
    </div>
  );
};

export default success;
