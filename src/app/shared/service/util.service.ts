import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    uppercase(value) {
        if (value.length <= 0) {
            return '';
        }

        return value.toUpperCase();
    }

    uniqArray(items: any): any {
        return Array.from(new Set(items.map(item => JSON.stringify(item)))).map((item: string) => JSON.parse(item));
    }

    orderArray(data: any, campo = 'descripcion'): any {
        if (!data) {
            return [];
        }
        if (data.length > 0) {
            return data.sort((a, b) => (a[campo] > b[campo]) ? 1 : -1);
        }

        return [];
    }

    clearHora(hora) {
        if (!hora) {
            return null;
        }

        if (typeof hora != 'string') {
            return null;
        }

        const replaces = ['+00 ', '+00', '0 ', '.0', , ' 0 '];
        let date = new Date();

        replaces.map(data => {
            hora = hora.replace(data, '');
        });

        let fecha = date.getFullYear() + '/01/01 ' + hora;
        return fecha;
    }

    formSuccessMessages(message, snackBar) {
        snackBar.open(
            message, 'X', {
            duration: 5000,
            panelClass: ['success-snackbar']
        }
        );
    }

    formErrorMessages(error, form, snackBar) {
        if (error.status === 400 || error.status === 409) {
            try {
                form.controls[error.error[0].field].setErrors({ 'incorrect': true });
            } catch (error) { }
            snackBar.open(
                error.error[0].message, 'X', {
                duration: 6000,
                panelClass: ['error-snackbar']
            });
        } else if (error.status == 401 || error.status == 403) {
            snackBar.open(
                'Es necesario autenticar para obtener la respuesta solicitada', 'X', {
                duration: 6000,
                panelClass: ['error-snackbar']
            });
        } else if (error.status == 404) {
            snackBar.open(
                'No se encuentran resultados.', 'X', {
                duration: 6000,
                panelClass: ['error-snackbar']
            });
        } else if (error.status == 500) {
            try {
                snackBar.open(
                    error.error.message, 'X', {
                    duration: 6000,
                    panelClass: ['error-snackbar']
                });
            } catch (error) {
                snackBar.open(
                    'Se presento un problema con el servidor, por favor comuníquese con el administrador.', 'X', {
                    duration: 6000,
                    panelClass: ['error-snackbar']
                });
            }

        } else {
            snackBar.open(
                'Se presento un problema con el servidor, por favor comuníquese con el administrador.', 'X', {
                duration: 6000,
                panelClass: ['error-snackbar']
            }
            );
        }
    }

    scrollToTop() {
        try {
            let element: HTMLElement = document.getElementsByClassName('back-to-top')[0] as HTMLElement;
            element.click();
        } catch (error) { }
    }

    addDays(fecha: Date, days: number): Date {
        fecha.setDate(fecha.getDate() + days);
        return fecha;
    }

    removeDays(fecha: Date, days: number): Date {
        fecha.setDate(fecha.getDate() - days);
        return fecha;
    }

}