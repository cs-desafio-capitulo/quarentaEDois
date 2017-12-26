import Log from '../models';

const LogsController = (Log) => ({
  async create(req, res) {
    const log = new Log(req.body);

    try {
        await log.save();
        res.sendStatus(200);
    } catch (err) {
        res.status(400).send(err.message);
    }
  },

  async get(req, res) {
    try {
        const logs = await Log.find({});
        res.status(200).send(logs);
    } catch (err) {
        res.status(400).send(err.message);
    }
  }
});

export default LogsController(Log);