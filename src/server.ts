require("module-alias/register");
import app from "@expenseCalculator/app";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
