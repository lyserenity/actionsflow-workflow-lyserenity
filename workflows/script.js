module.exports = async function ({ helpers }) {
  const result = await helpers.axios({
    method: 'get',
    url: "https://app.asana.com/api/1.0/tags/1198197485416173/tasks?completed_since=now&opt_fields=name,due_at,modified_at",
    headers: {
      Authorization: "Bearer ${{ secrets.ASANA_TOKEN_BEARER }}"
    }
  });
  return result.data;
};
