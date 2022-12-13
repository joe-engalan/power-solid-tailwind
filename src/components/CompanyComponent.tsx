import { Component } from "solid-js";
import { Company } from "../state/Company";
import { calcSharePrice } from "../state/costStructure";

export const CompanyComponent: Component<{ company: Company }> = (props) => {
  const { company } = props;

  return (
    <div class="company">
      <a class="logo">Logo</a>
      <br />
      <span>{props.company.name}</span>
      <br />
      <span>Size: {company.size}</span>
      <br />
      <span>
        Shares: {company.sharesRemaining}/{company.maxShares}
      </span>
      <br />
      <span>Share price: {calcSharePrice(company.tier, company.size)}</span>
    </div>
  );
};
