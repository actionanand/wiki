---
sidebar_position: 13
sidebar_label: 'Decorator in Typescript'
---

# Decorator in Typescript

A **decorator** in TypeScript is a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators allow you to modify or enhance the behavior of the target they are applied to. They are widely used in frameworks like Angular for dependency injection, metadata, and more.

TypeScript decorators are an extension that allows adding annotation and metaprogramming to class declarations and their members in TypeScript. TypeScript supports decorators syntax as an experimental feature which is distinct from JavaScript decorators that is currently a Stage 3 ECMAScript proposal.

There are six stages in the ECMAScript proposal process: Stage 0 (Strawman), Stage 1, Stage 2, Stage 3, and Stage 4. A proposal must progress through all these stages, and TC39 (the technical committee) must approve its movement to the next stage.

Metaprogramming in programming languages refers to writing code that manipulates or generates other code. Decorators in Typescript are a specific example of metaprogramming, allowing you to modify the behavior of functions or classes without directly changing their code. They are used to add functionality to existing objects, much like the Decorator design pattern.

## Decorators

### **Syntax**
Decorators are prefixed with the `@` symbol and are functions that are executed at runtime.

```ts
@decorator
class MyClass {
  @decorator
  myMethod() {}
}
```

---

### **Types of Decorators**

1. **Class Decorators**
   - Applied to a class.
   - Used to modify or annotate the class.

   ```ts
   function ClassDecorator(constructor: Function) {
     console.log("ClassDecorator called");
   }

   @ClassDecorator
   class MyClass {}
   ```

   **Output**: Logs `"ClassDecorator called"` when the class is defined.

---

2. **Method Decorators**
   - Applied to a method.
   - Used to modify or observe the behavior of a method.

   ```ts
   function MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log(`MethodDecorator called on: ${propertyKey}`);
   }

   class MyClass {
     @MethodDecorator
     myMethod() {
       console.log("Executing myMethod");
     }
   }
   ```

   **Output**: Logs `"MethodDecorator called on: myMethod"` when the class is defined.

---

3. **Property Decorators**
   - Applied to a property.
   - Used to observe or modify the behavior of a property.

   ```ts
   function PropertyDecorator(target: Object, propertyKey: string) {
     console.log(`PropertyDecorator called on: ${propertyKey}`);
   }

   class MyClass {
     @PropertyDecorator
     myProperty: string = "Hello";
   }
   ```

   **Output**: Logs `"PropertyDecorator called on: myProperty"` when the class is defined.

---

4. **Accessor Decorators**
   - Applied to a getter or setter.
   - Used to modify or observe the behavior of an accessor.

   ```ts
   function AccessorDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
     console.log(`AccessorDecorator called on: ${propertyKey}`);
   }

   class MyClass {
     private _value: number = 0;

     @AccessorDecorator
     get value() {
       return this._value;
     }

     set value(val: number) {
       this._value = val;
     }
   }
   ```

---

5. **Parameter Decorators**
   - Applied to a method parameter.
   - Used to observe or modify metadata about a parameter.

   ```ts
   function ParameterDecorator(target: Object, propertyKey: string, parameterIndex: number) {
     console.log(`ParameterDecorator called on: ${propertyKey}, parameter index: ${parameterIndex}`);
   }

   class MyClass {
     myMethod(@ParameterDecorator param: string) {
       console.log(param);
     }
   }
   ```

   **Output**: Logs `"ParameterDecorator called on: myMethod, parameter index: 0"` when the class is defined.

---

### **Practical Example: Logging Decorator**

```ts
function Log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // Logs: Method add called with arguments: 2,3
                             // Output: 5
```

---

### **Key Points**
1. **Metadata Reflection**:
   - TypeScript decorators often work with metadata.
   - You can use the `reflect-metadata` library to store and retrieve metadata.

   ```ts
   import "reflect-metadata";

   function MetadataDecorator(target: Object, propertyKey: string) {
     Reflect.defineMetadata("custom:metadata", "value", target, propertyKey);
   }

   class MyClass {
     @MetadataDecorator
     myProperty: string;
   }

   console.log(Reflect.getMetadata("custom:metadata", MyClass.prototype, "myProperty")); // Output: "value"
   ```

2. **Order of Execution**:
   - Decorators are applied in the following order:
     1. Parameter Decorators
     2. Method/Accessor Decorators
     3. Property Decorators
     4. Class Decorators

3. **Experimental Feature**:
   - Decorators are an experimental feature in TypeScript and require enabling the `experimentalDecorators` compiler option in tsconfig.json:
     ```json
     {
       "compilerOptions": {
         "experimentalDecorators": true
       }
     }
     ```

Decorators are a powerful feature for adding metadata, modifying behavior, and implementing cross-cutting concerns like logging, validation, and dependency injection.



## Factory Function in a Decorator
A factory function allows you to pass parameters to a decorator. It returns the actual decorator function.

---

### **Example: Logging Decorator with a Factory Function**

```ts
function Log(message: string) {
  // This is the factory function
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`${message} - Method ${propertyKey} called with arguments: ${args}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class Calculator {
  @Log("Addition Operation")
  add(a: number, b: number): number {
    return a + b;
  }

  @Log("Multiplication Operation")
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Example usage
const calc = new Calculator();
console.log(calc.add(2, 3)); // Logs: "Addition Operation - Method add called with arguments: 2,3"
                             // Output: 5
console.log(calc.multiply(4, 5)); // Logs: "Multiplication Operation - Method multiply called with arguments: 4,5"
                                  // Output: 20
```

---

### **Explanation**

1. **Factory Function**:
   - The `Log` function is a factory function that takes a `message` parameter.
   - It returns the actual decorator function.

2. **Decorator Function**:
   - The returned function is the actual decorator that modifies the method.
   - It wraps the original method and adds logging functionality.

3. **How It Works**:
   - When the `add` or `multiply` method is called, the decorator logs the custom message and the method arguments before executing the original method.

---

### **Key Points**
- Factory functions allow decorators to be dynamic and configurable.
- You can pass parameters to the factory function to customize the behavior of the decorator.
- This approach is commonly used in frameworks like Angular for dependency injection and metadata configuration.

## difference between experimental and ECMAScript decorators

The **difference between experimental decorators** and **ECMAScript decorators** in TypeScript lies in their implementation, syntax, and alignment with the ECMAScript standard. Here's a detailed comparison:

---

### **1. Experimental Decorators**
- **Introduced**: TypeScript's experimental decorators were introduced before the ECMAScript proposal for decorators was finalized.
- **Status**: Non-standard and based on an earlier stage of the ECMAScript proposal.
- **Syntax**: Uses the `@decorator` syntax.
- **Behavior**:
  - Allows decorating classes, methods, properties, accessors, and parameters.
  - Requires enabling the `experimentalDecorators` compiler option in tsconfig.json.

#### **Example**:
```ts
function Log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}
```

#### **Key Points**:
- **Metadata Reflection**: Often used with the `reflect-metadata` library for storing and retrieving metadata.
- **Order of Execution**: Follows a specific order (parameter → method/accessor → property → class).
- **Compiler Option**: Requires `"experimentalDecorators": true` in tsconfig.json.

---

### **2. ECMAScript Decorators**
- **Introduced**: Based on the finalized ECMAScript proposal for decorators (Stage 3+).
- **Status**: Standardized and aligned with the ECMAScript specification.
- **Syntax**: Uses the `@decorator` syntax but with stricter rules and a different API.
- **Behavior**:
  - Focuses on class elements (methods, fields, accessors).
  - Does not support parameter decorators.
  - Requires enabling the `useDefineForClassFields` compiler option in tsconfig.json.

#### **Example**:
```ts
function Log(value: any, context: ClassMethodDecoratorContext) {
  const originalMethod = value;

  return function (...args: any[]) {
    console.log(`Method ${context.name} called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}
```

#### **Key Points**:
- **Metadata Reflection**: Does not rely on `reflect-metadata` by default.
- **Context Object**: Provides a `context` object with metadata about the decorated element (e.g., `name`, `kind`).
- **Compiler Option**: Requires `"experimentalDecorators": true` and `"useDefineForClassFields": true` in tsconfig.json.

---

### **Key Differences**

| Feature                     | Experimental Decorators                     | ECMAScript Decorators                     |
|-----------------------------|---------------------------------------------|-------------------------------------------|
| **Standardization**         | Non-standard (TypeScript-specific)          | Standardized (aligned with ECMAScript)    |
| **Metadata Reflection**     | Requires `reflect-metadata`                 | Does not rely on `reflect-metadata`       |
| **Supported Targets**       | Classes, methods, properties, accessors, parameters | Class elements (methods, fields, accessors) |
| **Parameter Decorators**    | Supported                                   | Not supported                             |
| **Context Object**          | Not available                               | Provides `context` object                 |
| **Compiler Options**        | `"experimentalDecorators": true`            | `"experimentalDecorators": true` and `"useDefineForClassFields": true` |
| **Order of Execution**      | Parameter → Method/Accessor → Property → Class | Class elements only                       |

---

### **Which One Should You Use?**
- **Experimental Decorators**:
  - Use if you're working with older TypeScript projects or frameworks like Angular that rely on the experimental decorator implementation.
  - Requires `reflect-metadata` for advanced use cases.

- **ECMAScript Decorators**:
  - Use if you're targeting modern JavaScript and want to align with the ECMAScript standard.
  - Provides a cleaner and more standardized API.

---

### **Conclusion**
- Experimental decorators are TypeScript's legacy implementation, while ECMAScript decorators are the standardized version.
- As ECMAScript decorators become widely adopted, they are expected to replace experimental decorators in the long term.
