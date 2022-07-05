const fs = require("fs/promises");

async function parseOfficer(divisionName, officerName) {
  const picNames = (
    await fs.readdir(`assets/img/headshots/${divisionName}/${officerName}`, {
      withFileTypes: true,
    })
  )
    .filter((o) => o.isFile())
    .map((o) => o.name);

  const pics = await Promise.all(
    picNames.map(async (name) => {
      const buffer = await fs.readFile(
        `assets/img/headshots/${divisionName}/${officerName}/${name}`
      );
      const base64Img = Buffer.from(buffer, "binary").toString("base64");
      return `data:image/jpeg;base64,${base64Img}`;
    })
  );
  return pics;
}

async function parseDivision(divisionName) {
  const officers = (
    await fs.readdir(`assets/img/headshots/${divisionName}`, {
      withFileTypes: true,
    })
  )
    .filter((o) => o.isDirectory())
    .map((o) => o.name);
  return Promise.all(
    officers.map(async (o) => ({
      name: o.split("_").join(" "),
      team: divisionName.split("_").join(" "),
      pic: [...(await parseOfficer(divisionName, o))],
    }))
  );
}

async function handleGetRequest(req, res) {
  const divisions = (
    await fs.readdir("assets/img/headshots", {
      withFileTypes: true,
    })
  )
    .filter((o) => o.isDirectory())
    .map((o) => o.name);

  divisions.sort((a, b) => {
    if (a.includes("Director") && b.includes("Director")) {
      return a.localeCompare(b);
    }
    if (a.includes("Director")) {
      return -1;
    }
    if (b.includes("Director")) {
      return 1;
    }
    return a.localeCompare(b);
  });

  const officerData = (
    await Promise.all(
      divisions.map(async (curr) => {
        const divisionData = await parseDivision(curr);
        return divisionData;
      })
    )
  ).reduce((acc, curr) => [...acc, ...curr], []);
  await fs.writeFile("constants/officers.json", JSON.stringify(officerData));
}

async function main() {
  await handleGetRequest();
  console.log("Completed");
}

main();
