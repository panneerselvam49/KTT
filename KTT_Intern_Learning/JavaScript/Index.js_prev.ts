const sequelize=require('./sequelize')
const user = require('./user');
const company = require('./company');
const customer = require('./customer');
const visit = require('./visit');

// Self relation (manager → employee)
user.hasMany(user, { foreignKey: 'manager_id', as: 'team' });
user.belongsTo(user, { foreignKey: 'manager_id', as: 'manager' });

// One company → many customers
company.hasMany(customer, { foreignKey: 'company_id' });
customer.belongsTo(company, { foreignKey: 'company_id' });

// One employee → many visits
user.hasMany(visit, { foreignKey: 'employee_id' });
visit.belongsTo(user, { foreignKey: 'employee_id' });

// One customer → many visits
customer.hasMany(visit, { foreignKey: 'customer_id' });
visit.belongsTo(customer, { foreignKey: 'customer_id' });

module.exports = { user, company, customer, visit };
