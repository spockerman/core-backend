import {container} from 'tsyringe';

import IAppointmentsRespository from '@modules/appointments/repositories/IAppointmentRepository';
import AppointmentsRespository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';


import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import UsersRespository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRespository>(
    'AppointmentsRespository',
    AppointmentsRespository,
    );

container.registerSingleton<IUsersRespository>(
      'UsersRespository',
      UsersRespository,
      );
