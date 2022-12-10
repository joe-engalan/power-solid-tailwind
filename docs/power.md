# Power

A game about getting rich by manipulating power.

---

## Actors

---

### The World

Power takes place on a grid representation of the world.

- Each portion of the world is represented by a grid space.
- The default world is a 12x10 grid.

### Power Companies

Power companies provide power to the world.

- Each portion of the world is powered by only one power company.
- Power companies merge with other power companies to create large monopolies.
- Power companies are controlled by Power Brokers

### Power Broker

Power Brokers buy influence to control power companies.

- Power brokers invest in companies
- When a power company is merged, power brokers make more money and/or influence
- Power brokers expand companies

## Resources

---

### Land rights

Land rights are acquired by Brokers and given to a Company so the company can expand.

- Land rights can be in one of the following states:

1. Unowned - not yet acquired by Broker
2. Undeveloped - owned by Broker, but not prepared
3. Developed - prepared by the Broker but not assigned serviced by a company
4. Serviced - serviced by a company
5. DMZ - Undeveloped land that connot be developed

### Shares

Brokers buy shares in a Company to gain influence in the company.

- A company starts with a fixed number of shares
- Share prices are depend on the quality and marketshare of the company

### Money

Brokers use money to buy shares

- Brokers start with a fixed pool of money
- Brokers gain money during merge payouts

## Actions

---

### Develop land

Brokers develop land.

- If adjacent to a company, the company immediately services the land.
- If a plot of land will connect companies, the companies merge
  - If the companies are too large, the companies do not merge and the land cannot be (DMZ).

### Gain Influence

Brokers gain influence through buying shares

- Brokers can only buy a fixed number of shares in a transaction
- Brokers pay for shares with their money on hand
- Brokers must pay for shares immediately

### Acquire new land

Brokers are allocated new plots of land

- The government allocates new plots of land through a lottery system

### Merge Companies

The smaller company is always merged into the larger company

- Multiple mergers are resolved from smallest to largest companies
- In case of ties, the Broker decides the order of merger
