import { Pipe, PipeTransform } from "@angular/core";
import { VideoInfo } from "../../../core/interface/video.interface";

@Pipe({name: 'paginationHandler'})
export class PaginationHandlerPipe implements PipeTransform {
  transform(value: VideoInfo[], currentPage: number = 1, count: number = 12): VideoInfo[] {
    if (value) {
      const start = (currentPage - 1) * count;
      const end = currentPage * count;
      return value.slice(start, end);
    }

    return [];
  }
}