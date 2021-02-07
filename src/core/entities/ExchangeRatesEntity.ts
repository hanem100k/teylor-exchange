import {
	Entity, PrimaryGeneratedColumn, Column, PrimaryColumn
} from "typeorm";

// table was created for: referencing a blueprint for creating user modes. Entity name was chosen by the stakeholders to refer to a mode of operation by a device
// each row: will describe and define options for creating user modes
@Entity("exchange_rates")
export class ExchangeRatesEntity {
  @PrimaryGeneratedColumn() id: number;

  // adding a composite index to date and symbol
  @PrimaryColumn({
  	type: "date",
  	comment: "Field marking the time an exchange rate was captured."
  })
  rateForDate: Date;

  @PrimaryColumn({ type: "varchar", length: 20 })
  symbol: string;

  @Column({ type: "double precision" })
  exchangeRate: number;
}
