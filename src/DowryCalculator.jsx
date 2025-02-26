import React, { useState } from "react";

const DowryCalculator = () => {
  const [brideContribution, setBrideContribution] = useState(0);
  const [groomContribution, setGroomContribution] = useState(0);
  const [gifts, setGifts] = useState(0);
  const [customExpense, setCustomExpense] = useState(0);

  const [groomOccupation, setGroomOccupation] = useState("");
  const [groomLivingArea, setGroomLivingArea] = useState("");
  const [groomAge, setGroomAge] = useState(0);
  const [groomSalary, setGroomSalary] = useState(0);

  const [totalDowry, setTotalDowry] = useState(0);

  const calculateDowry = () => {
    let occupationBonus = 0;
    if (groomOccupation.toLowerCase() === "doctor") occupationBonus = 5000;
    else if (groomOccupation.toLowerCase() === "engineer") occupationBonus = 4000;
    else if (groomOccupation.toLowerCase() === "teacher") occupationBonus = 2000;

    let areaBonus = 0;
    if (groomLivingArea.toLowerCase() === "urban") areaBonus = 3000;
    else if (groomLivingArea.toLowerCase() === "rural") areaBonus = 1000;

    let ageFactor = groomAge < 30 ? 2000 : 1000;
    let salaryBonus = groomSalary * 0.1;

    const total =
      Number(brideContribution) +
      Number(groomContribution) +
      Number(gifts) +
      Number(customExpense) +
      occupationBonus +
      areaBonus +
      ageFactor +
      salaryBonus;

    setTotalDowry(total);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="shadow-lg p-6 rounded-2xl bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Detailed Dowry Calculator</h1>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Bride's Contribution"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setBrideContribution(e.target.value)}
          />
          <input
            type="number"
            placeholder="Groom's Contribution"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setGroomContribution(e.target.value)}
          />
          <input
            type="number"
            placeholder="Additional Gifts"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setGifts(e.target.value)}
          />
          <input
            type="number"
            placeholder="Custom Expenses"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setCustomExpense(e.target.value)}
          />

          <h2 className="text-xl font-semibold mt-6">Groom's Details</h2>

          <input
            type="text"
            placeholder="Groom's Occupation (e.g., Doctor, Engineer)"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setGroomOccupation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Groom's Living Area (Urban/Rural)"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setGroomLivingArea(e.target.value)}
          />
          <input
            type="number"
            placeholder="Groom's Age"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setGroomAge(e.target.value)}
          />
          <input
            type="number"
            placeholder="Groom's Salary"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setGroomSalary(e.target.value)}
          />

          <button
            onClick={calculateDowry}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Calculate Dowry
          </button>
          <div className="text-xl font-semibold text-center">
            Total Dowry: ${totalDowry.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DowryCalculator;
