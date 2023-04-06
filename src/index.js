import React from 'react';
import ReactDOM from 'react-dom/client';

// Task1
// Компонент для відображення одного користувача
class User extends React.Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
      </tr>
    );
  }
}

// Компонент для відображення всіх користувачів в таблиці
class UserTable extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={index} {...user} />
          ))}
        </tbody>
      </table>
    );
  }
}

class Task1 extends React.Component {
  state = {
    users: [
      { name: 'Іван', surname: 'Іванов', age: 25 },
      { name: 'Петро', surname: 'Петров', age: 30 },
      { name: 'Марія', surname: 'Петренко', age: 20 },
    ],
  };

  render() {
    const { users } = this.state;
    return <div>
      <p>Task 1</p>
      <UserTable users={users} />
      </div>;
  }
}

// Task 2
class UserTable1 extends React.Component {
  render() {
    const { users, showMessage } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
              <td>
                <a href="/" onClick={() => showMessage()}>
                  Show message
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class Task2 extends React.Component {
  showMessage() {
    alert('!');
  }

  render() {
    const users = [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 30 },
      { name: 'Bob', surname: 'Smith', age: 40 },
    ];

    return (
      <div>
        <p>Task 2</p>
        <UserTable1 users={users} showMessage={this.showMessage} />
      </div>
    );
  }
}

// Task 3
class User2 extends React.Component {
  handleClick = () => {
    this.props.showMessage(this.props.name);
  }

  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
        <td>
          <a href="/" onClick={this.handleClick}>
            Show Name
          </a>
        </td>
      </tr>
      </div>
    );
  }
}

class UsersTable2 extends React.Component {
  showMessage = (message) => {
    alert(message);
  }

  render() {
    const users = [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 22 },
      { name: 'Bob', surname: 'Smith', age: 30 },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User2
              key={index}
              name={user.name}
              surname={user.surname}
              age={user.age}
              showMessage={this.showMessage}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

class Task3 extends React.Component {
  showMessage() {
    alert('!');
  }

  render() {
    const users = [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 30 },
      { name: 'Bob', surname: 'Smith', age: 40 },
    ];

    return (
      <div>
        <p>Task 3</p>
        <UsersTable2 users={users} showMessage={this.showMessage} />
      </div>
    );
  }
}

// Task 4
class User3 extends React.Component {
  handleClick = () => {
    this.props.showMessage(this.props.index);
  }

  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
        <tr>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{age}</td>
          <td>
            <a href="/" onClick={this.handleClick}>
              Show Number
            </a>
          </td>
        </tr>
      </div>
    );
  }
}

class UsersTable3 extends React.Component {
  showMessage = (index) => {
    alert(`User number: ${index + 1}`);
  }

  render() {
    const users = [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 22 },
      { name: 'Bob', surname: 'Smith', age: 30 },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User3
              key={index}
              index={index}
              name={user.name}
              surname={user.surname}
              age={user.age}
              showMessage={this.showMessage}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

class Task4 extends React.Component {
  showMessage() {
    alert('!');
  }

  render() {
    const users = [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 30 },
      { name: 'Bob', surname: 'Smith', age: 40 },
    ];

    return (
      <div>
        <p>Task 4</p>
        <UsersTable3 users={users} showMessage={this.showMessage} />
      </div>
    );
  }
}

// Task 5
class Task5 extends React.Component {
  state = {
    users: [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 30 },
      { name: 'Bob', surname: 'Smith', age: 40 },
    ],
  };

  deleteUser = (index) => {
    const newUsers = [...this.state.users];
    newUsers.splice(index, 1);
    this.setState({ users: newUsers });
  };

  render() {
    return (
      <div>
        <p>Task 5</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => this.deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Task 6
class ListItem extends React.Component {
  state = {
    isEditing: false,
    text: this.props.text
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    this.setState({ isEditing: false });
    this.props.onSave(this.props.index, this.state.text);
  };

  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleInputBlur = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { text } = this.state;
    const { onDelete } = this.props;

    return (
      <li>
        {this.state.isEditing ? (
          <input
            type="text"
            value={text}
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            autoFocus
          />
        ) : (
          <>
            <span>{text}</span>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </>
        )}
        {this.state.isEditing && (
          <button onClick={this.handleSave}>Save</button>
        )}
      </li>
    );
  }
}

class List extends React.Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3']
  };

  handleSave = (index, text) => {
    const newItems = [...this.state.items];
    newItems[index] = text;
    this.setState({ items: newItems });
  };

  handleDelete = (index) => {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            text={item}
            onSave={this.handleSave}
            onDelete={() => this.handleDelete(index)}
          />
        ))}
      </ul>
    );
  }
}

class Task6 extends React.Component {
  render() {
    return (
      <div>
        <p>Task 6</p>
        <List />
      </div>
    );
  }
}

// Task 7
class ProductTable7 extends React.Component {
  render() {
    const products = this.props.products;
    const rows = products.map((product) => (
      <ProductRow7 key={product.id} product={product} onDelete={this.props.onDelete} />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ProductRow7 extends React.Component {
  handleDelete = () => {
    const id = this.props.product.id;
    this.props.onDelete(id);
  };

  render() {
    const product = this.props.product;
    const name = product.name;
    const price = product.price;
    const quantity = product.quantity;
    const totalPrice = price * quantity;

    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{totalPrice}</td>
        <td>
          <button onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

class Task7 extends React.Component {
  state = {
    products: [
      { id: 1, name: 'Apple', price: 1.0, quantity: 10 },
      { id: 2, name: 'Banana', price: 0.5, quantity: 20 },
      { id: 3, name: 'Orange', price: 1.5, quantity: 15 },
    ],
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((product) => product.id !== id);
    this.setState({ products: products });
  };

  render() {
    return (
      <div>
        <p>Task 7</p>
        <ProductTable7 products={this.state.products} onDelete={this.handleDelete} />
      </div>
    );
  }
}

// Task 8
class Product extends React.Component {
  render() {
    const { name, price, quantity, onDelete } = this.props;
    const total = price * quantity;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{total}</td>
        <td><button onClick={onDelete}>Видалити</button></td>
      </tr>
    );
  }
}

class ProductList extends React.Component {
  render() {
    const { products, onDelete } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Ціна</th>
            <th>Кількість</th>
            <th>Вартість</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product key={product.name} {...product} onDelete={() => onDelete(product)} />
          ))}
        </tbody>
      </table>
    );
  }
}

class ProductForm extends React.Component {
  state = {
    name: '',
    price: '',
    quantity: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, price, quantity } = this.state;
    this.props.onSubmit({ name, price: Number(price), quantity: Number(quantity) });
    this.setState({ name: '', price: '', quantity: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, price, quantity } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Назва" value={name} onChange={this.handleChange} />
        <input type="text" name="price" placeholder="Ціна" value={price} onChange={this.handleChange} />
        <input type="text" name="quantity" placeholder="Кількість" value={quantity} onChange={this.handleChange} />
        <button>Додати</button>
      </form>
    );
  }
}

class Task8 extends React.Component {
  state = {
    products: []
  };

  handleAddProduct = product => {
    this.setState(prevState => ({ products: [...prevState.products, product] }));
  };

  handleDeleteProduct = product => {
    this.setState(prevState => ({ products: prevState.products.filter(p => p !== product) }));
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <p>Task 8</p>
        <ProductList products={products} onDelete={this.handleDeleteProduct} />
        <ProductForm onSubmit={this.handleAddProduct} />
      </div>
    );
  }
}

// Task 9
class TotalCost extends React.Component {
  render() {
    const { products } = this.props;
    const totalCost = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return (
      <div>
        <p>Загальна вартість: {totalCost}</p>
      </div>
    );
  }
}

class Task9 extends React.Component {
  state = {
    products: []
  };

  handleAddProduct = product => {
    this.setState(prevState => ({ products: [...prevState.products, product] }));
  };

  handleDeleteProduct = product => {
    this.setState(prevState => ({ products: prevState.products.filter(p => p !== product) }));
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <p>Task 9</p>
        <ProductList products={products} onDelete={this.handleDeleteProduct} />
        <ProductForm onSubmit={this.handleAddProduct} />
        <TotalCost products={products} />
      </div>
    );
  }
}

// Task 10
class Product10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    const { name, checked } = event.target;
    this.props.onCheckboxChange(name, checked);
  }

  render() {
    const { name, price, quantity, onDelete, isChecked } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button onClick={onDelete}>Видалити</button></td>
        <td><input type="checkbox" name={name} checked={isChecked} onChange={this.handleCheckboxChange} /></td>
      </tr>
    );
  }
}

class ProductList10 extends React.Component {
  render() {
    const { products, onDelete, checkedProducts, onCheckboxChange } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Ціна</th>
            <th>Кількість</th>
            <th></th>
            <th>Чекбокс</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product10 key={product.name} {...product} onDelete={() => onDelete(product)} isChecked={checkedProducts[product.name]} onCheckboxChange={onCheckboxChange} />
          ))}
        </tbody>
      </table>
    );
  }
}

class ProductForm10 extends React.Component {
  state = {
    name: '',
    price: '',
    quantity: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, price, quantity } = this.state;
    this.props.onSubmit({ name, price: Number(price), quantity: Number(quantity) });
    this.setState({ name: '', price: '', quantity: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, price, quantity } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Назва" value={name} onChange={this.handleChange} />
        <input type="text" name="price" placeholder="Ціна" value={price} onChange={this.handleChange} />
        <input type="text" name="quantity" placeholder="Кількість" value={quantity} onChange={this.handleChange} />
        <button>Додати</button>
      </form>
    );
  }
}

class TotalCost10 extends React.Component {
  render() {
    const { products } = this.props;
    const totalCost = products
      .filter(product => product.checked)
      .reduce((acc, product) => acc + product.price * product.quantity, 0);
    return (
      <div>
        <p>Загальна вартість: {totalCost}</p>
      </div>
    );
  }
}

class Task10 extends React.Component {
  state = {
    products: [],
  };

  handleAddProduct = product => {
    this.setState(prevState => ({ products: [...prevState.products, product] }));
  };

  handleDeleteProduct = product => {
    this.setState(prevState => ({
      products: prevState.products.filter(p => p !== product),
    }));
  };

  handleCheckboxChange = (name, checked) => {
    this.setState(prevState => ({
      products: prevState.products.map(product =>
        product.name === name ? { ...product, checked } : product
      ),
    }));
  };

  render() {
    const { products } = this.state;
    const filteredProducts = products.filter(product => product.checked);
    const totalCost = filteredProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return (
      <div>
        <p>Task 10</p>
        <ProductList10
          products={products}
          onDelete={this.handleDeleteProduct}
          checkedProducts={products.reduce((acc, product) => ({ ...acc, [product.name]: product.checked }), {})}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <ProductForm10 onSubmit={this.handleAddProduct} />
        <TotalCost10 products={products} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1/>
    <Task2/>
    <Task3/>
    <Task4/>
    <Task5/>
    <Task6/>
    <Task7/>
    <Task8/>
    <Task9/>  
    <Task10/>
  </React.StrictMode>
);