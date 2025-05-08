---
sidebar_position: 14
sidebar_label: 'Cb Promise Async'
title: callbacks, promises, and async/await
---

In JavaScript and TypeScript, **callbacks**, **promises**, and **async/await** are mechanisms for handling asynchronous operations. Here's an explanation of each, along with examples:

---

## **1. Callbacks**
A **callback** is a function passed as an argument to another function, which is executed after the completion of an asynchronous operation.

### Example:
```typescript
function fetchData(callback: (data: string) => void): void {
  setTimeout(() => {
    callback('Data fetched successfully!');
  }, 1000); // Simulates an asynchronous operation
}

fetchData((data) => {
  console.log(data); // Output: Data fetched successfully!
});
```

### Pros:
- Simple to use for small tasks.
- Works well for basic asynchronous operations.

### Cons:
- Leads to **callback hell** when there are multiple nested callbacks.
- Difficult to read and maintain.

---

## **2. Promises**
A **promise** represents a value that may be available now, in the future, or never. It provides `.then()` and `.catch()` methods to handle success and failure.

### Example:
```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Failed to fetch data.');
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // Output: Failed to fetch data.
  });
```

### Pros:
- Avoids callback hell by chaining `.then()` and `.catch()`.
- Easier to read and maintain compared to callbacks.

### Cons:
- Can still become verbose with multiple `.then()` chains.

---

## **3. Async/Await**
**Async/await** is a syntactic sugar built on top of promises. It allows you to write asynchronous code in a synchronous style using `async` and `await` keywords.

### Example:
```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Failed to fetch data.');
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data); // Output: Data fetched successfully!
  } catch (error) {
    console.error(error); // Output: Failed to fetch data.
  }
}

getData();
```

### Pros:
- Simplifies asynchronous code, making it easier to read and maintain.
- Handles errors using `try/catch`, which is more intuitive.

### Cons:
- Requires modern JavaScript/TypeScript runtime (ES2017 or later).
- Still relies on promises under the hood.

---

## **Comparison**

| **Feature**       | **Callbacks**                     | **Promises**                     | **Async/Await**                |
|--------------------|-----------------------------------|-----------------------------------|---------------------------------|
| **Ease of Use**    | Simple for small tasks            | Easier than callbacks             | Simplest and most readable      |
| **Readability**    | Hard to read with nested calls    | Better than callbacks             | Very clean and readable         |
| **Error Handling** | Requires manual error handling    | `.catch()` for errors             | `try/catch` for errors          |
| **Chaining**       | Difficult                        | Easy with `.then()`               | Implicit with `await`           |

---

## **Practical Example: Fetching Data**

### Using Callbacks:
```typescript
function fetchData(callback: (data: string) => void, errorCallback: (error: string) => void): void {
  setTimeout(() => {
    const success = true;
    if (success) {
      callback('Data fetched successfully!');
    } else {
      errorCallback('Failed to fetch data.');
    }
  }, 1000);
}

fetchData(
  (data) => console.log(data),
  (error) => console.error(error)
);
```

---

### Using Promises:
```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Failed to fetch data.');
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

---

### Using Async/Await:
```typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Failed to fetch data.');
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

---

### **When to Use What**
- **Callbacks**: Use for very simple asynchronous operations (not recommended for complex tasks).
- **Promises**: Use when you need better readability and chaining.
- **Async/Await**: Use for modern, clean, and maintainable asynchronous code.

For Angular applications, **promises** and **async/await** are preferred over callbacks for handling asynchronous operations like HTTP requests, animations, or timers.

