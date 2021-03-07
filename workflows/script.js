module.exports = async function ({ helpers }) {
  const result = await helpers.axios.get(
    "https://app.asana.com/api/1.0/tags/1198197485416173/tasks?completed_since=now&opt_fields=name,due_at,modified_at",
    {headers: {'Authorization': '${{ secrets.ASANA_TOKEN }}', 'content-type': 'application/json'}}
  );
  const final = result.data;
  final["uuid"] = String(final.gid) + ":" + final.modified_at;
  return final;
};
