import React from "react";
import BankItem from "../components/BankItem";
import BcsItem from "../components/BcsItem";

export default function Courses() {
  return (
    <div>
      <div>
        <div className="my-20">
          <BcsItem />
        </div>
        
        <div>
          <BankItem />
        </div>
      </div>
    </div>
  );
}
