
import { useState } from "react";

function PlanPicker() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

  return (
    <div className="bg-[#DDDDDD] px-20 py-10 text-[#000000]">
      <div className="mb-10 flex items-end justify-between bg-[#000000] px-10 py-10 text-[#EEEEEE]">
        <div>
          <h2 className="text-5xl font-bold">Build your plan</h2>
          <p className="mt-4 text-2xl text-[#CB2957]">
            Seats: {seats} | Months: {months}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            className="rounded-lg bg-[#CB2957] px-6 py-3 font-bold text-[#EEEEEE]"
            onClick={handleAddSeat}
          >
            Add seat
          </button>

          <button
            className="rounded-lg bg-[#EEEEEE] px-6 py-3 font-bold text-[#000000]"
            onClick={handleAddMonth}
          >
            Add month
          </button>

          <button
            className="rounded-lg border-2 border-[#EEEEEE] px-6 py-3 font-bold text-[#EEEEEE]"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="overflow-hidden rounded-xl border-2 border-black bg-[#EEEEEE]">
          <div className="p-8">
            <h3 className="text-3xl font-bold">Starter</h3>
            <p className="mt-2 text-xl">
              PHP 199 per seat each month
            </p>

            <ul className="mt-6 text-xl">
              <li className="border-t border-[#DDDDDD] py-2">
                10 GB storage
              </li>
              <li className="border-t border-[#DDDDDD] py-2">
                Email support
              </li>
            </ul>
          </div>

          <p className="bg-black px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
            Total: PHP {199 * seats * months}
          </p>
        </div>

        {/* Team Plan */}
        <div className="overflow-hidden rounded-xl border-2 border-black bg-[#EEEEEE]">
          <div className="p-8">
            <h3 className="text-3xl font-bold">Team</h3>
            <p className="mt-2 text-xl">
              PHP 499 per seat each month
            </p>

            <ul className="mt-6 text-xl">
              <li className="border-t border-[#DDDDDD] py-2">
                100 GB storage
              </li>
              <li className="border-t border-[#DDDDDD] py-2">
                Chat support
              </li>
            </ul>
          </div>

          <p className="bg-black px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
            Total: PHP {499 * seats * months}
          </p>
        </div>

        {/* Business Plan */}
        <div className="overflow-hidden rounded-xl border-2 border-black bg-[#EEEEEE]">
          <div className="p-8">
            <h3 className="text-3xl font-bold">Business</h3>
            <p className="mt-2 text-xl">
              PHP 999 per seat each month
            </p>

            <ul className="mt-6 text-xl">
              <li className="border-t border-[#DDDDDD] py-2">
                1000 GB storage
              </li>
              <li className="border-t border-[#DDDDDD] py-2">
                Phone support
              </li>
            </ul>
          </div>

          <p className="bg-black px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
            Total: PHP {999 * seats * months}
          </p>
        </div>
      </div>

      <p className="mt-8 bg-black px-6 py-5 text-center text-xl text-[#EEEEEE]">
        All plans are billed per seat, every month.
      </p>
    </div>
  );
}

export default PlanPicker;

