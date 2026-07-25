import auditService from "../services/audit.service.js";

export default class auditControler {
  constructor() {
    this.auditservice = new auditService();
  }

  async auditWebsite(req, res) {
    try {
      const { url } = req.body;
      const result = await this.auditservice.auditWebsite(url);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
         "success":false,
         "message":err.message
      })
    }
  }
}