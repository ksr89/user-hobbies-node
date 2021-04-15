import { Request, Response, Router } from 'express';
import User, { IUser } from '../models/user';

const router: Router = Router();

router.get('/user', async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find({});

    if (users) {
      return res.status(200).send(users);
    } else {
      return res.status(200).send([]);
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
})

router.post('/user', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (name) {
      const user: IUser = new User({ name });
      await user.save()
      return res.status(200).send(user);
    } else {
      return res.status(400).send({
        "message": "User name is required."
      });
    }

  } catch (error) {
    res.status(500).send("Server Error");
  }
})

export default router;
