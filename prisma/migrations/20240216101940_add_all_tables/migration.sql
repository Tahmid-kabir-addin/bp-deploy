-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "defaultPrice" REAL NOT NULL,
    "currentPrice" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "CompareAtPrice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "defaultPrice" REAL NOT NULL,
    "currentPrice" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "CostPrice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "defaultPrice" REAL NOT NULL,
    "currentPrice" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "TaskApplication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskApplicationId" TEXT,
    CONSTRAINT "Collection_taskApplicationId_fkey" FOREIGN KEY ("taskApplicationId") REFERENCES "TaskApplication" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskApplicationId" TEXT,
    CONSTRAINT "Product_taskApplicationId_fkey" FOREIGN KEY ("taskApplicationId") REFERENCES "TaskApplication" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "storeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskApplicationId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "PriceIncrement" REAL NOT NULL,
    "PriceDecrement" REAL NOT NULL,
    "ComparePriceIncrement" REAL NOT NULL,
    "ComparePriceDecrement" REAL NOT NULL,
    "CostIncrement" REAL NOT NULL,
    "CostDecrement" REAL NOT NULL,
    CONSTRAINT "Task_taskApplicationId_fkey" FOREIGN KEY ("taskApplicationId") REFERENCES "TaskApplication" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskApplicationId" TEXT,
    "storeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "PriceIncrement" REAL NOT NULL,
    "PriceDecrement" REAL NOT NULL,
    "ComparePriceIncrement" REAL NOT NULL,
    "ComparePriceDecrement" REAL NOT NULL,
    "CostIncrement" REAL NOT NULL,
    "CostDecrement" REAL NOT NULL,
    CONSTRAINT "Sales_taskApplicationId_fkey" FOREIGN KEY ("taskApplicationId") REFERENCES "TaskApplication" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
