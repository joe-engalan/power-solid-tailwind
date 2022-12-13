import { Component } from "solid-js";
import { Company } from "../state/Company";
import { calcSharePrice } from "../state/costStructure";

export const CompanyComponent: Component<{ company: Company }> = (props) => {
  const { company } = props;
  const marketValue = 10000;
  const marketCap = 10000;
  console.log(company);

  return (
    <div class="company">
      <a class="logo">Logo</a>
      <br />
      <span>{props.company.name}</span>
      <br />
      <span>Size: {company.size}</span>
      <br />
      <span>
        Shares: {company.sharesRemaning}/{company.maxShares}
      </span>
      <br />
      <span>Share price: {calcSharePrice(company.tier, company.size)}</span>
      <br />
      <span>Market value: {marketValue}</span>
      <br />
      <span>Market cap: {marketCap}</span>
      <br />
    </div>
  );
};
